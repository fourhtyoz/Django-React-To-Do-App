import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";

  export default class CustomModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: this.props.activeItem
        }
    }

    handleChange = event => {
        let { name, value } = event.target
        if (event.target.type === 'checkbox') {
            value = event.target.checked
        }
        const activeItem = {...this.state.activeItem, [name]: value}
        this.setState({activeItem})
    }

    render() {
        const {toggle, onSave} = this.props
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup>
                    <Label for="todo-title">Title</Label>
                    <Input
                        type="text"
                        id="todo-title"
                        name="title"
                        value={this.state.activeItem.title}
                        onChange={this.handleChange}
                        placeholder="Enter Todo Title"
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for="todo-description">Description</Label>
                    <Input
                        type="text"
                        id="todo-description"
                        name="description"
                        value={this.state.activeItem.description}
                        onChange={this.handleChange}
                        placeholder="Enter Todo description"
                    />
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input
                        type="checkbox"
                        name="completed"
                        checked={this.state.activeItem.completed}
                        onChange={this.handleChange}
                        />
                        Completed
                    </Label>
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                <Button
                    color="success"
                    onClick={() => onSave(this.state.activeItem)}
                >
                    Save
                </Button>
                </ModalFooter>
            </Modal>
        )
    }
  }