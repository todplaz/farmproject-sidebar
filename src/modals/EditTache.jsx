import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTache = ({modal, toggle, updateTask, taskObj}) => {

    const [nomTache, setNomTache] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === 'nomTache'){
            setNomTache(value)
        }else{
            setDescription(value)
        }
    }

    useEffect(() => {
        setNomTache(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = nomTache
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Modifier une tache</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label>Nom de la tache</label>
                            <input type="text" className='form-control' value={nomTache} onChange={handleChange} name="nomTache" />
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textarea rows="5" className='form-control' value={description} onChange={handleChange} name="description" ></textarea>
                        </div>
                    </form>
                </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Modifier</Button>
                <Button color="secondary" onClick={toggle}>Annuler</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTache;