const User = require('../model/UserSchema');
const bcrypt = require('bcrypt');
const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const generateOtp = ()=>Math.floor(100000+Math.random()*900000);

const registerUser = async (req, resp) => {
   try{
       const {username, displayName, password, roles, isActive} = req.body;
       
       // Use username as email since frontend sends email as username
       const email = username;
       
       const existingUser = await User.findOne({$or: [{username}, {email}]});
       if (existingUser) {
           return resp.status(409).json({message: 'User already exists!'});
       }
       console.log('Creating user:', username, displayName, email, roles, isActive)
       const salt =  bcrypt.genSaltSync(10);
       const hashedPassword =  bcrypt.hashSync(password, salt);

       const otp = generateOtp();

       const newUser = new User({
           username, 
           displayName, 
           email,  // Add email field
           password: hashedPassword,
           roles, 
           isActive, 
           otp
       });

       // TODO: Uncomment when SendGrid account is fixed
       /*
       const msg ={
           to:username,
           from:process.env.SENDGRID_VERIFIED_EMAIL,
           subject:'Your OTP',
           text:`Your OTP code is ${otp}`,
           html:`<h1>${otp}</h1>`
       }
       await sgMail.send(msg);
       */
       
       // Log OTP for testing until email is fixed
       console.log(`🔑 OTP for ${username}: ${otp}`);
       
       await newUser.save();
       resp.status(201).json({'message':'new user created..'});
   }catch (e) {
       console.log(e)
       resp.status(500).json({error:e});
   }
}

const verifyOtp = async (req, resp) => {
    try{
        const {username, otp} = req.body;
        const existingUser = await User.findOne({username});
        if (!existingUser) {
            return resp.status(409).json({message: 'username is not found!'});
        }
        if(existingUser.otp==otp){
            await User.findOneAndUpdate({username},{
                isActive:true
            });
        }else{
            return resp.status(404).json({message: 'otp is wrong!'});
        }

        // TODO: Uncomment when SendGrid account is fixed
        /*
        const msg ={
            to:username,
            from:process.env.SENDGRID_VERIFIED_EMAIL,
            subject:'account is activated',
            text:`activated`,
            html:`<h1>welcome on board</h1>`
        }
        await sgMail.send(msg);
        */
        
        resp.status(201).json({'message':'new user verified..'});
    }catch (e) {
        resp.status(500).json({error:e});
    }
}

module.exports={
    registerUser,verifyOtp
}