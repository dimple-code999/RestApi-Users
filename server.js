const express = require('express');
const app = express();
const cors = require('cors');


const port = 5000;

app.use(express.json({ limit: process.env.PAYLOAD_SIZE_LIMIT }));
app.use(express.urlencoded({
  extended: true,
  limit: process.env.PAYLOAD_SIZE_LIMIT,
}));
app.use(cors());



app.use('/', (req, res, next) => {
    res.status(202).json({
        Users : [
           {
            firstName: "Dimple",
            lastName: "Shah",
            location: "Mumbai"
           }
        ]
    })
    console.log("users:::::::", Users)
});



app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });