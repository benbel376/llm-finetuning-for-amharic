import '../css/employee.css';
import '../css/util.css';
import {useState} from 'react';
import '../images/cyber_punk.webp'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';

function EmployeeForm() {
    const [lat, setLat] = useState(32571);
    const [lon, setLon] = useState(13280);
    const [radi, setRadius] = useState(537);
    const [addr, setAddr] = useState('0x793750185u1873515613');
    const [budget, setBudget] = useState(1000);
    function handle_collect() {
        const lat_i = document.getElementById("lati").value;
        const lon_i = document.getElementById("long").value;
        const radi_i = document.getElementById("radius").value;
        const addr_i = document.getElementById("address").value;
        const budg_i = document.getElementById("budget").value;
        setLat(lat_i)
        setLon(lon_i)
        setRadius(radi_i)
        setAddr(addr_i)
        setBudget(budg_i)
    }
    console.log(lat)
  return (
    <div class="t_limiter">
    <div class="t_container-login100">
        <div class="t_wrap-login100">
            <form class="t_login100-form t_validate-form p-l-55 p-r-55 p-t-178">
                <span class="t_login100-form-title">
                    Add Employees to Track
                </span>

                <div class="t_title">
                    Provide Employee Address
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "address" class="address t_input100" type="text" placeholder={addr}/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_title">
                    Provide Geographic Boundary
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "long" class="center_lon t_input100" type="text" placeholder={lon}/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "lati" class="center_lat t_input100" type="text" placeholder={lat}/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "radius" class="t_input100" type="text" placeholder={radi}/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_title">
                    Specify Allocated Budget
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "budget" class="t_input100" type="text" placeholder={budget}/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_container-login100-form-btn">
                    <button class="collect t_login100-form-btn" onClick={handle_collect}>
                        Request
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
  );
}
export default EmployeeForm;