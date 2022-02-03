let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
module.exports = async (event, context) => {
    try {
        const { month } = event.pathParameters;
        const { body } = event;
        const item = JSON.parse(body);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: `post monthly debit item ${JSON.stringify(item)} api for ${month} month `,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
