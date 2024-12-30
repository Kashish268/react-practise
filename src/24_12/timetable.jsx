import * as React from "react";
// import '../timetable.css';
class Timetable extends React.Component {
    render() {
        return(
            <div>
                <center>
                <table className="table" border="2" cellPadding={5}>
                    <thead>
                        <tr>
                            <th colSpan={6}><h4>
                                RK UNIVERSITY<br/>
                                SCHOOL OF ENGINEERING<br/>
                                6CEA</h4></th>
                            
                        </tr>
                    </thead>
                    <tr>
            <td colSpan={2}>Class Counselor: Anju Kakkad</td>
            <td></td>
            <td></td>
            <td colSpan={2}>W.F.E : 17/12/2024</td>
                    </tr>
                    <tr  align="center">
                        <td>
                        </td>
                        <td>
                            MONDAY
                        </td>
                        <td>
                            TUESDAY
                        </td>
                        <td>
                            WEDNESDAY
                        </td>
                        <td>
                            THURSDAY
                        </td>
                        <td>
                            FRIDAY
                        </td>
                    </tr>
                    <tr   align="center">
                        <td>
                            8:00 to 8:55
                        </td>
                        <td>
                            React(NV)
                        </td>
                        <td rowSpan={2}>
                            React(NV)
                        </td>
                        <td>
                            AI/ML(CP)
                        </td>
                        <td>
                            react(SMS)
                        </td>
                        <td>
                            PD(DS)/DM(lib)/EC(lib)
                        </td>
                    </tr>
                    <tr   align="center">
                        <td>
                            8:00 to 8:55
                        </td>
                        <td>
                            React(NV)
                        </td>
                        
                        <td>
                            AI/ML(CP)
                        </td>
                        <td>
                            react(SMS)
                        </td>
                        <td>
                            PD(DS)/DM(lib)/EC(lib)
                        </td>
                    </tr>
                    
                    <tr   align="center">
                        <td>
                            Class/ Lab Location
                        </td>
                        <td>
                            LL1
                        </td>
                        
                        <td>
                           LL5
                        </td>
                        <td>
                            LL1
                        </td>
                        <td>
                           LL1
                        </td>
                        <td>
                            118
                        </td>
                    </tr>
<tr   align="center">
    <td>
        9:45 to 10:00
    </td>
    <td colSpan={5} align="center">
        TEA BREAK
    </td>
</tr>
                    <tr   align="center">
                        <td>
                            10:00 to 10:50
                        </td>
                        <td>
                            .NET(PJT)/<br/>
                            ADV.JAVA(NC)
                        </td>
                        
                        <td>
                        .NET(BD)/<br/>
                        ADV.JAVA(NC)
                        </td>
                        <td>
                            TOC(AKK)
                        </td>
                        <td rowSpan={2}>
                           AL/ML(CP)
                        </td>
                        <td>
                            AL/ML(CP)
                        </td>
                    </tr>
                    <tr   align="center">
                        <td>
                            10:50 to 11:40
                        </td>
                        <td>
                            .NET(PJT)/<br/>
                            ADV.JAVA(NC)
                        </td>
                        
                        <td>
                        .NET(BD)/<br/>
                        ADV.JAVA(NC)
                        </td>
                        <td>
                            TOC(AKK)
                        </td>
                        
                        <td>
                            TOC(AKK)
                        </td>
                    </tr>
                    <tr   align="center">
                        <td>
                            Class/ Lab Location
                        </td>
                        <td>
                            LL1/LL5
                        </td>
                        
                        <td>
                        LL1/LL5
                        </td>
                        <td>
                            201
                        </td>
                        <td>
                           LL6
                        </td>
                        <td>
                            LL7
                        </td>
                    </tr>
                    <tr   align="center">
    <td>
    11:40 to 12:30
    </td>
    <td colSpan={5} align="center">
        LUNCH BREAK
    </td>
</tr>
<tr   align="center">
                        <td>
                            12:30 to 1:20
                        </td>
                        <td  rowSpan={2}>
                        PD(lib)/DM(OD)/EC(RKI)
                        </td>
                        
                        <td rowSpan={2}>
                        PD(DS)/DM(lib)/EC(lib)
                        </td>
                        <td>
                        PD(lib)/DM(OD)/EC(RKI)
                        </td>
                        <td rowSpan={2}>
                          .NET(BD)/
                          <br/>ADV.JAVA(LIB)
                        </td>
                        <td rowSpan={2}>
                           ADV.JAVA(MV)/<br/>.NET(lib)

                        </td>
                    </tr>
                    <tr   align="center">
    <td>
        1:20 to 2:10
    </td>
    <td>
    PD(lib)/DM(OD)/EC(RKI)
    </td>
</tr>
<tr   align="center">
                        <td>
                            Class/ Lab Location
                        </td>
                        <td>
                            214/Elec.Machine Lab
                        </td>
                        
                        <td>
                           118
                        </td>
                        <td>
                            214/Elec.Machine Lab
                        </td>
                        <td>
                           LL3
                        </td>
                        <td>
                            LL5
                        </td>
                    </tr>
                    
                </table>
                </center>
            </div>
        );
    }
};
export default Timetable;