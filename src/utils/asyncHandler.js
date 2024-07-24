const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err,)=>next(err))
    }
}

export {asyncHandler}



// method 2
// const asyncHandler =(fx)=> async (req,res,next)=>{
//     try {
//         await fx(req,res,next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }