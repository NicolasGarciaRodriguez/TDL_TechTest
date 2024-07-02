import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return validator.isEmail(v);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        maxlength: [100, 'Password must be at most 100 characters long'],
        validate: {
            validator: function (v) {
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: props => 'Password must contain at least one letter and one number'
        }
    }
});
userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
userSchema.methods.comparePasswords = function (inputPassword) {
    return bcrypt.compare(inputPassword, this.password);
};
export const UserModel = mongoose.model("User", userSchema);
