import React from 'react'

const Pagination = (props) => {

    //props.page
    //props.total
    //props.Onchange
const getPages = () => {
    const result =[]
    for(let i = 0; i< props.total; i++){
        let currentPage = i+1;
        result.push(<a 
        onClick={()=> props.onChange(currentPage)} 
        className={props.page === currentPage ? "active" : ""}>{currentPage}
        </a>
        )
    }
    return result
}

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
TODO: loop que pone paginas por cantidad de items/ items a mostrar  y asigna clases activa a página actual 
https://youtu.be/5DAEdXKp7QA?t=6918
*/}

{/*version 1 */}
{/*Array.apply(0,Array(props.total )).map(value => <a className="active" href="#">1</a>)*/}
{/*version 2 */}
{getPages()}

                    <a href="#"><i className="ion-arrow-right-b"></i></a>
                </div>
            </div>
        </>
    )
}

export default Pagination