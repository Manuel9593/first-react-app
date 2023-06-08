import Container from 'react-bootstrap/Container';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function SearchForm() {
    function searchTitles(event){
        event.preventDefault();
        console.log(event)
    };
    return (
        <Container className='p-5 justify-content-center text-center'>
            <Form onSubmit={(e)=>console.log(e)} id='searchForm'>
                <Row className="mt-3 align-items-center justify-content-center">
                <Form.Label as={Col} sm="auto">Titolo:</Form.Label>
                    <Form.Group as={Col} sm="6">
                        <InputGroup>
                            <InputGroup.Text>
                                <i id='searchInput' className="align-self-center bi bi-search"></i>
                            </InputGroup.Text>
                            <Form.Control id='query'
                            type="text"
                            name='query'
                            aria-describedby="searchInput"
                            required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Button as={Col} sm="auto" name='submit' type="submit" id='submitButton'>Cerca</Button>
                </Row>
            </Form>
        </Container>
    );
}


export default SearchForm;