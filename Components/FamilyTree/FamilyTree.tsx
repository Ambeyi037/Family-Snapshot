import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './FamilyTree1.scss'

const BASEURL = "http://127.0.0.1:8000/tree_data/"

const LineageTreeVisualization: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(BASEURL)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [BASEURL]);
    console.log(data)


    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // CSV Data
        var data2 = [
            { child: "Washingtone", parent: "Rasto", spouse: "Judith" },
            { child: "Owen", parent: "Rasto", spouse: "Phanice" },
            { child: "Hudson", parent: "Rasto", spouse: "Namukhula" },
            { child: "Nambaka", parent: "Rasto", spouse: "Tabitha" },
            { child: "Clifford", parent: "Nambaka" },
            { child: "Clintone", parent: "Washingtone" },
            { child: "Rodricks", parent: "Washingtone" },
            { child: "Purity", parent: "Washingtone" },
            { child: "Patrick", parent: "Owen", spouse: "Aggy" },
            { child: "Wellingtone", parent: "Owen", spouse: "Malvin" },
            { child: "Queensly", parent: "Wellingtone" },
            { child: "Omukofu", parent: "Hudson", spouse: "M.kale" },
            { child: "Kale", parent: "Omukofu" },
            { child: "Maxwell", parent: "Patrick" },
            { child: "Rasto", parent: "", spouse: "Amukaya" },
        ];


        // Convert to hierarchy
        const dataStructure = d3
            .stratify()
            .id(function (d: any) {
                return d.child;
            })
            .parentId(function (d: any) {
                return d.parent;
            })(data);

        const treeStructure = d3.tree().size([1000, 600]);
        const information = treeStructure(dataStructure);

        // Draw connections
        svg.selectAll("path.connection1")
            .data(information.links())
            .enter()
            .append("path")
            .attr("class", "connection1")
            .attr("d", function (d: any) {
                return (
                    "M" +
                    (d.source.x - 20) +
                    "," +
                    d.source.y +
                    "h 60 v 50 H" +
                    d.target.x +
                    " V" +
                    d.target.y
                );
            });

        svg.selectAll("path.connection2")
            .data(information.links())
            .enter()
            .append("path")
            .attr("class", "connection2")
            .attr("d", function (d: any) {
                return "M" + (d.source.x + 40) + "," + d.source.y + "h 40";
            });

        // Draw rectangles
        svg.selectAll("rect.node")
            .data(information.descendants())
            .enter()
            .append("rect")
            .attr("class", "node")
            .attr("x", function (d: any) {
                return d.x - 60;
            })
            .attr("y", function (d: any) {
                return d.y - 20;
            });

        // Draw spouse rectangles
        svg.selectAll("rect.spouse")
            .data(information.descendants())
            .enter()
            .append("rect")
            .attr("class", "spouse")
            .attr("x", function (d: any) {
                return d.x + 60;
            })
            .attr("y", function (d: any) {
                return d.y - 20;
            })
            .classed("hide", function (d: any) {
                return d.data.spouse === undefined;
            });

        // Draw names
        svg.selectAll("text.name")
            .data(information.descendants())
            .enter()
            .append("text")
            .attr("class", "name")
            .text(function (d: any) {
                return d.data.child;
            })
            .attr("x", function (d: any) {
                return d.x - 20;
            })
            .attr("y", function (d: any) {
                return d.y;
            })
            .classed("bigger", true);

        // Draw spouse names
        svg.selectAll("text.spouseName")
            .data(information.descendants())
            .enter()
            .append("text")
            .attr("class", "spouseName")
            .text(function (d: any) {
                return d.data.spouse;
            })
            .attr("x", function (d: any) {
                return d.x + 100;
            })
            .attr("y", function (d: any) {
                return d.y;
            })
            .classed("bigger", true);
    }, []);

    return (
        <div className='family-tree-container'>
            {/* <h1>Hello world</h1> */}
            <svg ref={svgRef} width={window.innerWidth} height={window.innerHeight}>
                {/* SVG content will be generated here */}
            </svg>
        </div>
    );
};

export default LineageTreeVisualization;
