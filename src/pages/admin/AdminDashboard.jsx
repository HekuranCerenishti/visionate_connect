import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import './admindashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', email: '' });

    const handleAddUser = () => {
        setUsers([...users, { id: users.length + 1, ...newUser }]);
        setNewUser({ name: '', email: '' });
        setShowAddModal(false);
    };

    return (
        <Container fluid>
            <Row>
                <Col md={12} className="main-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>Admin</h5>
                        <Button onClick={() => setShowAddModal(true)} variant="primary">Add New Employee</Button>
                        <Button onClick={() => setShowAddModal(true)} variant="primary">Employee List</Button>

                    </div>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.title || 'N/A'}</td>
                                    <td>{user.status || 'N/A'}</td>
                                    <td>{user.role || 'N/A'}</td>
                                    <td>
                                        <Button  onClick={() => setShowAddModal(true)} variant="warning" size="sm" >🖊️</Button>
                                        <Button variant="danger" size="sm">🗑</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formUserName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        value={newUser.name}
                                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formUserTitle" className="mt-3">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Title"
                                        value={newUser.title}
                                        onChange={(e) => setNewUser({ ...newUser, title: e.target.value })}
                                    />                                </Form.Group>
                                <Form.Group controlId="formUserStatus" className="mt-3">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Status"
                                        value={newUser.status}
                                        onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formUserRole" className="mt-3">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Role"
                                        value={newUser.role}
                                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleAddUser}>
                                Add User
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;
