import React, {useEffect} from 'react';
import './App.css';
import {PostgrestClient} from '@supabase/postgrest-js';

const App = () => {

    useEffect(() => {
        console.log('app did mount');
        const client = new PostgrestClient('http://localhost:4000');
        client
            .from('omega')
            .select('*')
            .then(res => {
               const {body: users} = res;
               console.log(users);
            })
            .catch(e => {
                console.log(e);
            });
        client
            .from('omega')
            .match({
                id: '15f65a8a-3d84-4a64-add6-d00bb1b698c4'
            })
            .update({
                username: 'applast modified'
            }, {
                bulk: false
            }).then(res => {
                console.log(res);
            }).catch(e => {
                console.log(e);
            });
    }, []);

    return (
        <div className="App">
        </div>
    );

};

export default App;
