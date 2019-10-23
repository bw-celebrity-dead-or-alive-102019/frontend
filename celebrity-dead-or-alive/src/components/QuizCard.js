import React, {useState, useEffect} from "react";
import axios from 'axios';
import CelebCard from './CelebCard';

export default function QuizCard() {

    const randomID = () => {
        return Math.floor(Math.random() * 300 + 1)
      }

    const [data, setData] = useState({})
    const [id, setId] = useState(Math.floor(Math.random() * 300 + 1))

    useEffect(() => {
        axios
          .get(
            `https://celebs-dead-or-alive.herokuapp.com/celebs/${id}`
          )
          .then((e) => {
            e.status ? setData(e.data) : console.log("This shouldn't show up")
          })
          .catch((err) => {
            console.log('Something isnt working', err)
            setId(randomID())
          })
      }, [id])

return (
    <div>
        <CelebCard data={data} />
    </div>
);
        }
