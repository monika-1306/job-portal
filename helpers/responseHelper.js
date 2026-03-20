const handleSuccess = (res, data) => {
  res.status(200).send({
    result: true,
    message: "Success",
    payload: data,
  });
};

const handleError = (res, err, payload = null) => {
  res.status(400).send({
    result: false,
    message: err?.message,
    payload: payload,
  });
};

const handleOK = (res) => {
  res.status(200).send({
    result: true,
    message: "Success",
  });
};

module.exports = {
  handleSuccess,
  handleError,
  handleOK,
};
