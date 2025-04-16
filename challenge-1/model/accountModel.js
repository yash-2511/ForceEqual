import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  matchScore: { type: Number, required: true },
  status: { type: String, default: 'Pending' }
});

export default mongoose.model('Account', accountSchema);
