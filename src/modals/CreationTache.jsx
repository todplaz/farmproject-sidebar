import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreationTache = ({modal, toggle, save, cities}) => {

    const [nomTache, setNomTache] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [city, setCity] = useState('Paris');



    const handleChange = (e) => {
        
        const {name, value} = e.target

        switch(name){
            case 'nomTache':
                setNomTache(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'start-time':
                setStartTime(value);
                break;
            case 'end-time':
                setEndTime(value);
                break;
            case 'city':
                setCity(value);
                break;
        }
    }

    /*    if(name === 'nomTache'){
            setNomTache(value)
        }else{
            setDescription(value)
        }
    }

    const handleTime = (e) => {
        
        const {name, value} = e.target

        if(name === 'start-time'){
            setStartTime(value)
        }else if(name === 'end-time'){
            setEndTime(value)
        }else{
            setCity(value)
        }
    } */

    const handleSave = () => {
        let taskObj = {}
        taskObj['Name'] = nomTache
        taskObj['Description'] = description
        taskObj['startTime'] = startTime
        taskObj['endTime'] = endTime
        taskObj['city'] = city
        save(taskObj)
    }


    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Créer une tache</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label>Nom de la tache</label>
                            <input type="text" className='form-control' value={nomTache} onChange={handleChange} name="nomTache" />
                        </div>
                        <select class="form-select" aria-label="Default select example" value={city} name='city' onChange={handleChange}>
                            <option selected>Selectionnez une ville</option>
                            {cities.map((city) => <option value={city}>{city}</option>)}
                            
                        </select>
                        <br/>
                        <div>
                            <label for="appt-time"> Veuillez déterminer une plage horaire de tache : </label>
                            <fieldset className='form-control'>
                                <label> Début de la tache :</label>
                                <input type="time" name="start-time" onChange={handleChange} value={startTime} />
                                <label> Fin de la tache :</label>
                                <input type="time" name="end-time" onChange={handleChange} value={endTime} />
                                <span className="validity"></span>
                            </fieldset>
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textarea rows="5" className='form-control' value={description} onChange={handleChange} name="description" ></textarea>
                        </div>
                    </form>
                </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Créer</Button>
                <Button color="secondary" onClick={toggle}>Annuler</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreationTache;