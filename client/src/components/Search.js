import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { FETCH_POSTS_QUERY_SEARCH } from '../util/graphqlsearch';
import { useQuery } from '@apollo/react-hooks';
import { Form, Input, Button, Grid, Card, Image, Icon, Label } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import Footer from "../components/Footer";

function Search(props) {
    const location = useLocation()
    const history = useHistory()
        const params = new URLSearchParams(location.search);
    const search = params.get("q");
    const { user } = useContext(AuthContext);
    const [searchResult, setSearchResult] = useState([])
    const [search1, setSearch1] = useState([])
    const {
        data: { getPostsSearch: posts }
    } = useQuery(FETCH_POSTS_QUERY_SEARCH, {
        variables: {
            search
        }
    });
    function handleForm(event) {
        event.preventDefault()
        // console.log(data);
        history.push(`/search?q=${searchResult}`)
    }
    function handleMessage(e) {
        const ahmet = e.target.value;
        setSearchResult(ahmet);
    }
    return (
        <>
            <Form onSubmit={handleForm}>
                <Form.Group widths='equal'>
                    <Input onChange={handleMessage.bind(this)} placeholder='Search Restaurant' />
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Search'
                        onClick={handleForm}
                    />
                </Form.Group>
            </Form>
            <hr />
            <Grid columns={3}>
            <Grid.Row>
            {posts &&
                posts.map((post) => (
                   
                    <Grid.Column   computer={5}
                    mobile={12}
                    tablet={9}
                    key={post.id}
                    style={{ marginBottom: 20 }}>
                       
                        <PostCard post={post} />
                      
                    </Grid.Column>
                ))}
            </Grid.Row>
            </Grid>
            <Footer></Footer>
        </>
    )
}
export default Search;
