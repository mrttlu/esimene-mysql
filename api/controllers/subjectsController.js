const subjectsService = require('../services/subjectsService');
const subjectsController = {};

// Endpoint for getting list of available subjects
// GET - subjects
// Required values: none
// Optional values: none
// Returns: status 200 - OK and list of subjects in response body
// Returns: status 400 - no userId in request
subjectsController.read = async (req, res) => {
  const userId = req.user;
  if (userId) {
    // Get list of subjects
    const subjects = await subjectsService.read(userId);
    // Return list of subjects
    res.status(200).json({
        success: true,
        subjects
    });
  } else {
    res.status(400).json({
      success: false
  });
  }
}

// Endpoint for getting subject specified by id
// GET - subjects
// Required: id, userId (from request)
// Optional: none
// Returns: status 200 - OK and subject data in response body
// Returns: status 400 - No subject found
// Returns: status 400 - Required field(s) missing or invalid
subjectsController.readById = async (req, res) => {
  const userId = req.user;
  const id = typeof(parseInt(req.params.id)) === 'number' ? parseInt(req.params.id) : false;
  if (id) {
    const subject = await subjectsService.readById(id, userId);
    if (subject) {
      // Return subject with specified id
      res.status(200).json({
        success: true,
        subject
      });
    } else {
      // Return error
      res.status(400).json({
        success: false,
        message: 'No subject found'
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: 'Required field(s) missing or invalid'
  });
  }
}

// Endpoint for creating new subject
// POST - subjects
// Required values: name, lecturerId, userId (from request)
// Optional values: none
// Returns:
//  Success: status 201 - Created and new subject id
//  Fail: status 400 - Required field(s) missing or invalid
//  Fail: status 500 - Server error
subjectsController.create = async (req, res) => {
  // Check if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
  const name = typeof(req.body.name) === 'string' && req.body.name.trim().length > 0 ? req.body.name : false;
  const lecturerId = typeof(req.body.lecturerId) === 'number' ? req.body.lecturerId : false;
  const userId = req.user;

  // Check if required data exists
  if (name && lecturerId && userId) {
      // Create new json with user data
      const subject = {
          name,
          lecturers_id: lecturerId,
          users_id: userId
      };
      const id = await subjectsService.create(subject);
      // Return data
      if (id) {
        res.status(201).json({
            success: true,
            id
        });
      } else {
        res.status(500).json({
            success: false,
            message: 'Something went wrong while creating new user'
        });
      }
  } else {
      // Return error message
      res.status(400).json({
          success: false,
          message: 'Required field(s) missing or invalid'
      });
  }
}

// Endpoint for updating subjects specified by id
// PUT - subjects
// Required: id
// Optional: name, lecturerId, userId (from request)
// Returns:
//  Success: status 200 - OK
//  Fail: status 400 - Subject does not exists.
//  Fail: status 400 - Required field(s) missing or invalid
subjectsController.update = async (req, res) => {
  // Next lines checking if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
  const id = typeof(req.body.id) === 'number' ? req.body.id : false;
  const name = typeof(req.body.name) === 'string' && req.body.name.trim().length > 0 ? req.body.name : false;
  const lecturerId = typeof(req.body.lecturerId) === 'number' ? req.body.lecturerId : false;
  const userId = req.user;
  // Check if required data exists
  if(id && userId) {
      const subject = {
          id,
          name,
          lecturers_id: lecturerId,
          users_id: userId
      };
      const result = await subjectsService.update(subject);
      // Return updated user data
      if (result) {
        res.status(200).json({
            success: result
        });
      } else {
        res.status(400).json({
            success: false,
            message: 'Subject does not exists.'
        });
      }

  } else {
      // Return error message
      res.status(400).json({
          success: false,
          message: 'Required field(s) missing or invalid.'
      });
  }
}

// Endpoint for deleting subject specified by id
// DELETE - subjects
// Required: id
// Optional: none
// Returns:
//  Success: status 200 - OK
//  Fail: status 400 - No subject found.
//  Fail: status 400 - Required field(s) missing or invalid.
subjectsController.delete = async (req, res) => {
    const userId = req.user;
  // Check if required data exists
  const id = typeof(parseInt(req.body.id)) === 'number' ? parseInt(req.body.id) : false;
  if(id && userId) {
      const result = await subjectsService.delete(id, userId);
      if (result) {
        // Return success message
        res.status(200).json({
            success: result
        });
      } else {
        res.status(400).json({
            success: false,
            message: 'No subject found.'
        });
      }

  } else {
      // Return error message
      res.status(400).json({
          success: false,
          message: 'Required field(s) missing or invalid'
      });
  }
}

module.exports = subjectsController;