import { GetFetch } from "../../lib/getfetch"
import './tests.css'

export const Tests = () => {
    let tests = GetFetch('tests/1')
    console.log(tests);
    return (
        <div className="container tests">
            <h2 className="register-heading">

            Test
            </h2>
            <div className="container">
        <form action="">
             
        {tests && tests.map(test => {
            return (
                <div className="tests-router">
                <h4>{test.question}</h4>
                <div>

                <input type="radio" name={test.test_id} value={test.test_id}/>
                <label htmlFor={test.test_id}>
                    {test.variants[0]}
                </label>
                </div>
                <div>

                <input type="radio" name={test.test_id}  value={test.test_id}/>
                <label htmlFor={test.test_id}>
                    {test.variants[1]}
                </label>
                </div>
                <div>

                <input type="radio" name={test.test_id}  value={test.test_id}/>
                <label htmlFor={test.test_id}>
                    {test.variants[2]}
                </label>
                </div>
                <div>
                <input type="radio" name={test.test_id}  value={test.test_id}/>
                <label htmlFor={test.test_id}>
                    {test.variants[3]}
                </label>
                </div>
                <span className="line"></span>
                </div>
            )
        })}
            <button className="tests-btn" type="submit">Yakunlash</button>
        </form>
        </div>
        </div>
    )
}