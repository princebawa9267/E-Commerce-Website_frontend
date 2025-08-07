import React, { useEffect, useState } from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import { Box } from '@mui/material';

const steps = [
    { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
    { name: "Packed", description: "Items Packed in Dispatch Warehouse", value: "CONFIRM" },
    { name: "Shipped", description: "by Mon, 15 Jul", value: "SHIPPED" },
    { name: "Arriving", description: "by 16 Jul - 18 Jul", value: "ARRIVING" },
    { name: "Arrived", description: "by 16 Jul - 18 Jul", value: "DELIVERED" },
];

const canceledStep = [
    { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
    { name: "Order Cancelled", description: "on Thu, 11 Jul", value: "CANCELLED" },
];
const currentStep = 2;


// const OrderStepper = ({ orderStatus }) => {

//     const [statusStep, setStatusStep] = useState(steps);

//     useEffect(() => {
//         if (orderStatus === 'CANCELLED') {
//             setStatusStep(canceledStep)
//         }
//         else {
//             setStatusStep(steps)
//         }
//     }, [orderStatus])

//     return (
//         <div>
//             <Box className="my-10">
//                 {statusStep.map((step, index) => (
//                     <>
//                         <div key={index} className={`flex px-4`}>
//                             <div className='flex flex-col items-center'>
//                                 <Box className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? "text-[var(--primary-color)]" : "text-[#bdbdbd]"} z-10`}>
//                                     {step.value === orderStatus
//                                         ? <CheckCircleIcon color='var(--primary-light)'/>
//                                         : <FiberManualRecordIcon />}
//                                 </Box>

//                                 {statusStep.length - 1 != index && (
//                                     <div className={`border h-20 w-[2px] ${index < currentStep ? "bg-[var(--primary-color)]" : "bg-gray-300 text-gray-600"}`}>

//                                     </div>
//                                 )}
//                             </div>

//                             <div className={`ml-2 w-full`}>
//                                 <div className={`${step.value === orderStatus ? "bg-[var(--primary-color)] p-2 text-white font-medium rounded-md -translate-y-3" : ""} ${(orderStatus === "CANCELLED" && step.value === orderStatus) ? "bg-red-500" : ""} w-full`}>
//                                     <p className={``}>{step.name}</p>
//                                     <p className={`${step.value === orderStatus ? "text-gray-200" : "text-gray-500"} text-xs`} >{step.description}</p>
//                                 </div>
//                             </div>

//                         </div>
//                     </>
//                 ))}
//             </Box>
//         </div>
//     )
// }


const OrderStepper = ({ orderStatus }) => {
    const [statusStep, setStatusStep] = useState(steps);

    useEffect(() => {
        setStatusStep(orderStatus === 'CANCELLED' ? canceledStep : steps);
    }, [orderStatus]);

    const currentStep = statusStep.findIndex(step => step.value === orderStatus);

    return (
        <Box className="my-10">
            {statusStep.map((step, index) => (
                <div key={index} className="flex px-4">
                    <div className="flex flex-col items-center">
                        <Box className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${index <= currentStep ? "text-[var(--primary-color)]" : "text-[#bdbdbd]"}`}>
                            {step.value === orderStatus
                                ? <CheckCircleIcon style={{ color: "var(--primary-color)" }} />
                                : <FiberManualRecordIcon />}
                        </Box>

                        {index < statusStep.length - 1 && (
                            <div className={`border h-20 w-[2px] ${index < currentStep ? "bg-[var(--primary-color)]" : "bg-gray-300"}`}></div>
                        )}
                    </div>

                    <div className="ml-2 w-full">
                        <div className={`w-full ${step.value === orderStatus ? "bg-[var(--primary-color)] p-2 text-white font-medium rounded-md -translate-y-3" : ""} ${(orderStatus === "CANCELLED" && step.value === orderStatus) ? "bg-red-500" : ""}`}>
                            <p>{step.name}</p>
                            <p className={`${step.value === orderStatus ? "text-gray-200" : "text-gray-500"} text-xs`}>{step.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Box>
    );
};


export default OrderStepper;
