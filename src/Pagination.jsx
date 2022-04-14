import React from 'react'

const Pagination = (props) => {

    props.page
    props.total
    props.Onchange


    return (
        <>
            <div className="topbar-filter">
                {/*
                <label>Movies per page:</label>
                <select>
                    <option value="range">5 Movies</option>
                    <option value="saab">10 Movies</option>
    </select>*/}
                <div className="pagination2">
                    <span>Page {props.page} of {props.total}:</span>

                    {/*
TODO: loop que pone paginas por cantidad de items/ items a mostrar  y asigna clases activa a pagina actual 
https://youtu.be/5DAEdXKp7QA?t=6918
*/}

                    <a className="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#"><i className="ion-arrow-right-b"></i></a>
                </div>
            </div>
        </>
    )
}

export default Pagination