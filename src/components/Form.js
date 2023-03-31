import { Button } from "@mui/material";

function Form() {
    return (
        <form>
            <label htmlFor="name">Your Name: <input id="name" name="name" type="text" required /></label>
            <label htmlFor="email">Your Email: <input id="email" name="email" type="email" required /></label>
            <textarea id="message" name="message" rows="15" cols="50" required></textarea>
            <Button variant="contained" type="submit" value="Submit">Submit</Button>
        </form>
    )
}

export default Form;