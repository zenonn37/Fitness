import React from 'react'
import PropTypes from 'prop-types'
import history from "../actions/history";
import { useDispatch } from 'react-redux';
import { setCurrent } from '../actions/programsActions'

const ProgramList = ({ name, level, excercises, time, id }) => {

    const dispatch = useDispatch();
    const showData = () => {
        console.log('pressed');
        dispatch(setCurrent(id))

        history.push(`/programs/${id}`)

    }


    return (
        <div className="ios-box">
            <div className="move-logo">
                <span className="icon has-text-info">
                    <i className="fas fa-2x fa-heartbeat" />
                </span>
            </div>

            <div className="move-info">
                <h2 className="title flex-control" onClick={() => showData()}>
                    {name} | {level}
                    <i className="fas fa-1x fa-stopwatch" />
                    {time}<small>min</small>
                </h2>

            </div>
            {/* refactor green circle for excercise count */}
            <div className="move-complete">
                <div className="panel-notification">
                    {excercises.length}
                </div>
            </div>
        </div>
    )
}

ProgramList.propTypes = {

}

export default ProgramList
