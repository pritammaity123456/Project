import React, { Component } from 'react';

class AddModal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="modal-default">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Default Modal</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor={'datepicker'}>Date:</label>
                                        <div className="input-group date">
                                            <div className="input-group-addon">
                                                <i className="fa fa-calendar"></i>
                                            </div>
                                            <input type="text" className="form-control" id="datepicker" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={'input1'}>Spend For</label>
                                        <input type="text" className="form-control" placeholder="Enter ..." id={'input1'} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor={'input2'}>Amount</label>
                                        <input type="text" className="form-control" placeholder="Enter ..." id={'input2'} />
                                    </div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default AddModal;