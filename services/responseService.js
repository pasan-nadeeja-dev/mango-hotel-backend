export default {
  successWithData(data, res) {
    return res.json({
      status: true,
      data: {
        count: data.length ? data.length : 0,
        statusCode: res.statusCode,
        data: data,
      },
    });
  },
  successWithMessage(message, res) {
    return res.json({
      status: true,
      data: {
        statusCode: res.statusCode,
        message: message,
      },
    });
  },
  errorWithData(error, res) {
    return res.json({
      status: false,
      error: {
        statusCode: 400,
        data: error,
      },
    });
  },
  errorWithMessage(message, res) {
    return res.json({
      status: false,
      error: {
        statusCode: 400,
        message: message,
      },
    });
  },
};
