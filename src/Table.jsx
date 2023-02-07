import React from "react"

 export   const Table = () => {
return (
    <div className="Table">
        
        <div id="table1">
            
    <h1 >Table</h1> </div>

    <table border={"1px"}>
        <tr>
            <th>Empoyee name</th>
            <th>Empoyee joining Data</th>
            <th>Empoyee Salary</th>
            <th>Empoyee Experence</th>
            <th>Empoyee age </th>
        </tr>
        <tr>
            <th>musaddiq</th>
            <th> 2020</th>
            <th>2000</th>
            <th>2year Experence </th>
            <th>25</th>
        </tr>
        <tr>
            <th>sufiyan</th>
            <th> 2019</th>
            <th>24000</th>
            <th>2year Experence </th>
            <th>23</th>
        </tr>
        <tr>
            <th>sufi</th>
            <th> 2021</th>
            <th>34000</th>
            <th>3year Experence </th>
            <th>28</th>
        </tr>
        <tr>
            <th>kuzi</th>
            <th> 2023</th>
            <th>50000</th>
            <th>4year Experence </th>
            <th>24</th>
        </tr>
    </table>
    </div>
)
}