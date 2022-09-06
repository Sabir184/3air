import React from 'react';
import './NewUsers.scss';
import Container from 'react-bootstrap/Container';

function NewUsers() {
    return (
        <div>
            <Container fluid className='newusers'>
                <Container>
                    <div className='billions'>
                        <h2>
                            Billions of new users.
                        </h2>
                        <h3>
                            Unlimited potential for all.
                        </h3>
                    </div>
                    <div className='users-diagram'>
                        <img src='./assets/users-diagram.svg' alt='bg' />
                    </div>
                </Container>
            </Container>
            <Container className='doll'>
            <div className='users-doll'>
                <img src='./assets/users-doll.svg' alt='bg' height={330} width={270} />
            </div>
            </Container>
        </div>
    );
}

export default NewUsers;