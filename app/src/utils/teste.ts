import Box from "../models/Box"
import BoxDAO from "../models/BoxDAO"
import Auth from "../services/Auth"
import Session from "../services/Session"


const main = async () => {
    const addBox = () => {
        const dao = new BoxDAO()
        let box = new Box(0, 'boxda ada', 'box1', 0, 100, false)
        console.log(box.toJson(),box.toString());
        dao.add(box).then(box => console.log(box)).catch(err => console.log(err))
    }
    await Auth.login('user4@email.com', 'password4').then(res => {
       Session.createInstance(res, 'password4')
    }).then(() => addBox()).catch(err => console.log('deu pau'))
}

main()