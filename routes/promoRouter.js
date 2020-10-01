const express= require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("will send all the promos to you");
})
.post((req,res,next)=>{
    res.end('Will add promo:'+req.body.promo+'with details:'+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation is not supported on /promos');
})
.delete((req,res,next)=>{
    res.end('Deleting all promos');
});

promoRouter.route('/:promoId')
.get((req,res,next)=>{
    res.statusCode=403;
    res.end('will send details of the dish: '+ req.params.promoId+'  to you');
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported on /promotions/'+req.params.promoId);
})
.put((req,res,next)=>{
    res.write('updating the promo:'+req.params.promoId+"\n");
    res.end('will update the promo:'+req.body.name +
           'with details'+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting  promo:'+req.params.promoId);
});

module.exports = promoRouter;

