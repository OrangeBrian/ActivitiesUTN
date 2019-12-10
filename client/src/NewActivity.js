import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {post} from "./ActivityFunc"
export default class NewActivity extends Component {
    constructor(){
        super()
        this.state = {
            creator: "",
            text: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const newPost = {
            creator: this.state.creator,
            text: this.state.text
        }
        post(newPost)
        .then(res => {
            window.location.reload()
        })
    }
    render() {
        return (
            <div className="contenedor">
                <Form noValidate onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="exampleText">Creator:</Label>
                        <Input type="text" name="creator" id="creator" value = {this.state.creator} onChange={this.onChange}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Activity:</Label>
                        <Input type="textarea" name="text" id="text" value = {this.state.text} onChange={this.onChange}/>
                    </FormGroup>
                    <Button className = "btn btn-dark" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}
