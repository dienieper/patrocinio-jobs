class CreateVacancyController {
  async execute(req, res) {
    const { name, description, location } = req.body;

    return res.status(200).json({ name, description, location });
  }
}

export default CreateVacancyController;
