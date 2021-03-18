import React, {useState} from 'react';
import EditTache from '../modals/EditTache'

const Card = ({taskObj, index, deleteTask, updateListArray, cities}) => {
    const [modal, setModal] = useState(false)

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className='card-wrapper mr-5'>

            <div className='card-top' style={{'backgroundColor': colors[index%5].primaryColor}}></div>
            <div className='task-holder'>

                <span className='card-header' style={{'backgroundColor': colors[index%5].secondaryColor, 'borderRadius': '10px'}}>{taskObj.Name}</span>
                <p className='mt-3'>{taskObj.city}</p>
                <p className='mt-3'>{taskObj.Description}</p>

                <p className='mt-3'>Heure de début : {taskObj.startTime}</p>
                <p className='mt-3'>Heure de fin : {taskObj.endTime}</p>

                <div style={{'position': 'absolute', 'right': '20px', 'bottom': '20px'}}>
                    <i className='far fa-edit mr-4' style={{'color': colors[index%5].primaryColor, 'cursor': 'pointer'}} onClick={() => setModal(true)}></i>
                    <i className='far fa-trash-alt' style={{'color': colors[index%5].primaryColor, 'cursor': 'pointer'}} onClick={handleDelete}></i>
                </div>

            </div>
            <EditTache modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} cities={cities}/>
        </div>
    );
};

export default Card;