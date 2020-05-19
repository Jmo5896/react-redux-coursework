import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>WARNING</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Justin"
                    time="Today at 4:45PM"
                    text="hi there"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Cassie"
                    time="Today at 2:00AM"
                    text="coronavirus is no joke"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Lotus"
                    time="Today at 3:30PM"
                    text="LOOK AT ME"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));