const sequelize = require("../models/index.js");
const Sequelize = require("sequelize");

const Input = require("../utils/input-utils.js");
const Document = sequelize.models.Documents;
const Document_Classes = sequelize.models.Document_Classes;
const Models = sequelize.models;
const Op = Sequelize.Op;

exports.getMaxPart = async (req, res) => {
  Document.findAll({
  attributes: [[sequelize.fn('max', sequelize.col('part_num')), 'maxPartNum']],
  raw: true,
  })
  .then(response => {
    res.send(response);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "no error message"
    });
  });
}


exports.createDoc = async (req, res) => {
  expected = {
    "Project": 1,
    "Doc_Class": 1,
    "Description": "string",
    "Requestor": 1,
    "Part_Num": 1
  }

  input_check = await Input.complex_check(expected, req.body);
  if(Object.keys(input_check).length != 0) {
    res.status(400).send({
      message: "Invalid Input",
      result: input_check
    });
    return
  }

  const doc = {
    "project": req.body.Project,
    "class": req.body.Doc_Class,
    "part_num": req.body.Part_Num,
    "revision": req.body.Revision,
    "description": req.body.Description,
    "requestor": req.body.Requestor,
    "checker": req.body.Checker,
    "approver": req.body.Approver,
    "creation_date": req.body.Creation_Date,
    "ready_date": req.body.Ready_Date,
    "checked_date": req.body.Checked_Date,
    "approved_date": req.body.Approved_Date,
    "released_date": req.body.Released_Date,
    "revision_reason": req.body.Revision_Reason
  }

  Document.create(doc)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.findAllDocs = async (req, res) => {
  // This is a big brain search filter, if you disagree please tell someone who cares
  const query = req.query
  var whereStatement = {}
  if(query.id)
    whereStatement['doc_id'] = query.id;
  if(query.project)
    if(query.strict)
    whereStatement['$Project.name$'] =
      {[Op.eq]: query.project};
    else
    whereStatement['$Project.name$'] =
      {[Op.like]: '%' + query.project + '%'};
  if(query.class)
    whereStatement['$Document_Class.code$'] =
      {[Op.like]: '%' + query.class + '%'};
  if(query.part_num)
    whereStatement['part_num'] =
      {[Op.like]: '%' + query.part_num + '%'};
  if(query.revision)
    whereStatement['revision'] =
      {[Op.like]: '%' + query.revision + '%'};
  if(query.description)
    whereStatement['description'] =
      {[Op.like]: '%' + query.description + '%'};
  if(query.requestor)
    whereStatement['$Requestor.name$'] =
      {[Op.like]: '%' + query.requestor + '%'};
  if(query.checker)
    whereStatement['$Checker.name$'] =
      {[Op.like]: '%' + query.checker + '%'};
  if(query.approver)
    whereStatement['$Approver.name$'] =
      {[Op.like]: '%' + query.approver + '%'};
  if(query.create)
    whereStatement['creation_date'] =
      {[Op.like]: '%' + query.create + '%'};
  if(query.ready)
    whereStatement['ready_date'] =
      {[Op.like]: '%' + query.ready + '%'};
  if(query.approved)
    whereStatement['approved_date'] =
      {[Op.like]: '%' + query.approved + '%'};
  if(query.released)
    whereStatement['released_date'] =
      {[Op.like]: '%' + query.released + '%'};
  if(query.reason)
    whereStatement['revision_reason'] =
      {[Op.like]: '%' + query.reason + '%'};

  Document.findAll({
    where: whereStatement,
    include: {all: true}
  })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.findDocClasses = async (req, res) => {
  Document_Classes.findAll()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.findAllDocsByProject = async (req, res) => {
  req.query['strict'] = true;
  req.query['project'] = req.params['project'];
  exports.findAllDocs(req, res);
}

exports.findOneDoc = async (req, res) => {
  expected = { id: 1 }

  input_check = await Input.simple_check(expected, req.params);
  if(Object.keys(input_check).length != 0) {
    res.status(400).send({
      message: "Invalid Input",
      result: input_check
    });
    return
  }

  const id = req.params.id;

  Document.findByPk(id)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.updateDoc = async (req, res) => {
  expected = { id: 1 }

  input_check = await Input.simple_check(expected, req.params);
  if(Object.keys(input_check).length != 0) {
    res.status(400).send({
      message: "Invalid Input",
      result: input_check
    });
    return
  }

  const doc = {
    "project": req.body.Project,
    "class": req.body.Doc_Class,
    "part_num": req.body.Part_Num,
    "revision": req.body.Revision,
    "description": req.body.Description,
    "requestor": req.body.Requestor,
    "checker": req.body.Checker,
    "approver": req.body.Approver,
    "creation_date": req.body.Creation_Date,
    "ready_date": req.body.Ready_Date,
    "checked_date": req.body.Checked_Date,
    "approved_date": req.body.Approved_Date,
    "released_date": req.body.Released_Date,
    "revision_reason": req.body.Revision_Reason
  }

  console.log(req.params)
  console.log(req.body)
  const id = req.params.id;

  Document.update(doc, {
    where: { doc_id: id }
  })
    .then(num => {
      console.log(num);
      if (num == 1) {
        res.send({
          message: "Document updated."
        });
      } else {
        res.send({
          message: `Cannot update Document with id=${id}, DNE or invalid body`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.deleteDoc = async (req, res) => {
  expected = { id: 1 }

  input_check = await Input.simple_check(expected, req.params);
  if(Object.keys(input_check).length != 0) {
    res.status(400).send({
      message: "Invalid Input",
      result: input_check
    });
    return
  }

  const id = req.params.id;

  Document.destroy({
    where: { doc_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Document deleted."
        });
      } else {
        res.send({
          message: `Cannot delete Document with id=${id}, DNE?`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.deleteAllDocs = async (req, res) => {
  Document.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Documents deleted.` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "no error message"
      });
    });
};
