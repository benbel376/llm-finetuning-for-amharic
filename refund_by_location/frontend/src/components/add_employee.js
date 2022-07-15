import '../css/employee.css';
import '../css/util.css';

import '../images/block.webp'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';

function EmployeeForm() {

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
                    <input class="t_input100" type="text" placeholder="Address"/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_title">
                    Provide Geographic Boundary
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input class="t_input100" type="text" placeholder="Max. Lon"/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input class="t_input100" type="text" placeholder="Min. Lon"/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input class="t_input100" type="text" placeholder="Max. Lat"/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input class="t_input100" type="text" placeholder="Min. Lat"/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_title">
                    Specify Allocated Budget
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input class="t_input100" type="text" placeholder="Budget"/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_container-login100-form-btn">
                    <button class="t_login100-form-btn">
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