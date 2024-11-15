import User from '../models/User.js';

export const getEventProviders = async (req, res) => {
  try {
    const providers = await User.find({ role: 'eventProvider' });
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event providers' });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: 'customer' });
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
};

export const blockUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
  
      user.blocked = !user.blocked;
      await user.save();
      res.status(200).json({ message: `User ${user.blocked ? 'blocked' : 'unblocked'} successfully` });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user status' });
    }
  };
  
