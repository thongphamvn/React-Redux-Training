import React, {Component} from 'react'
import { Button, Modal,tooltip} from 'react-bootstrap';

class ModalEditTodo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Modal show={this.props.isPopupEdit} onHide={this.props.onHideEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Todo" defaultValue={this.props.todo.text}
                                   ref="todo"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Daypicker">Remind me on a day and location</label>
                            <input type="checkbox"  data-toggle="toggle" defaultValue="false"/>
                            <div className="col-10">
                                <input className="form-control" type="date" defaultValue="" id="example-date-input"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label defaultValue="" htmlFor="location">Location</label>
                            <input type="text" placeholder="Your Destination address" className="form-control" id="location" ref="location"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="note">Note</label>
                            <textarea className="form-control" placeholder="Note..." rows="2" cols="40" id="note" ref="note" defaultValue=""/>
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHideEdit} className="btn btn-default">Cancel</Button>
                    <Button onClick={this.props.onSaveEdit} className="btn btn-primary">Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default ModalEditTodo