export default (action) => async (req, res) => {
  try {
    return await action(req, res);
  } catch (error) {
    return res.status(400).json({
      errors: error?.errors?.map((validationError) => validationError.message),
    });
  }
};
