import Button from './Button';
import './css/quiztaker.css';

export default function QuizTakerAccount() {

    return (
        <>
            <div className='heading'>
                <h1>Quizzes</h1>
            </div>

            <div className='m-5'>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Quiz Name</th>
                            <th>Created At</th>
                            <th>Valid Till</th>
                            <th>Total Attempts</th>
                            <th>Current Attempt</th>
                            <th>Time Limit(in Second)</th>
                            <th>Quiz Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Python Quiz</td>
                            <td>01/03/2025</td>
                            <td>31/03/2025</td>
                            <td>50</td>
                            <td>1</td>
                            <td>60 (second)</td>
                            <td><Button value="Take Quiz"/></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><Button value="Take Quiz"/></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><Button value="Take Quiz" tooltip='Not Available' disabled/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}