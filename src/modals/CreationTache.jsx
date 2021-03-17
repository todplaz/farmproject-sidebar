import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreationTache = ({modal, toggle, save}) => {

    const [nomTache, setNomTache] = useState('');
    const [description, setDescription] = useState('');
    const [apptime, setApptime] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === 'nomTache'){
            setNomTache(value)
        }else{
            setDescription(value)
        }/*else{
            setApptime(value)
        }*/
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj['Name'] = nomTache
        taskObj['Description'] = description
        taskObj['Apptime'] = apptime
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
                        <div>
                            <label for="appt-time"> Veuillez déterminer une plage horaire de tache : </label>
                            <fieldset className='form-control'>
                                <label> Début de la tache :</label>
                                <input type="time" name="apptime"  />
                                <label> Fin de la tache :</label>
                                <input type="time" name="apptime"  />
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