const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//create image
const generateImage = async(req,res) => {
    try { 
        const response = await openai.createImage({
            prompt: 'coffee',
            n:2,
            size: '512x512'
        });
        const imageURL = response.data.data[0].url
                res.status(200).json({
                success: true,
                data:imageURL
        })
    } catch (error) {
        
        /*res.status(400).json({
            success: false,
            error: 'The image could not be generated'
                    });*/
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
                      } else {
                        console.log(error.message);
                      }
    }
};


module.exports = { generateImage }

/*
const generateImage = async(req,res) => {
    res.status(200).json({
        success: true,
    });
}

module.exports = { generateImage }
*/


