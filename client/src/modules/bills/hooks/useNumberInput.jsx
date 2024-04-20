export default function useNumberInput() {
    const formatNumber = function (n) {
        // format number 1000000 to 1,234,567
        return n.replace(/\D/g, "")
    }
    const checkAmountInput = function (input) {
        if (!input) return

        // get input value
        var input_val = input.value;

        // don't validate empty input
        if (input_val === "") {
            return;
        }

        // original length
        var original_len = input_val.length;

        // initial caret position
        var caret_pos = input.selectionStart;

        // check for decimal
        if (input_val.indexOf(".") >= 0) {
            // this prevents multiple decimals from
            // being entered
            var decimal_pos = input_val.indexOf(".");

            // split number by decimal point
            var left_side = input_val.substring(0, decimal_pos);
            var right_side = input_val.substring(decimal_pos);

            // add commas to left side of number
            left_side = formatNumber(left_side).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            // validate right side
            right_side = formatNumber(right_side);

            // Limit decimal to only 2 digits
            right_side = right_side; //.substring(0, 2);

            // join number by .
            input_val = left_side + "." + right_side;
        } else {
            // no decimal entered
            // add commas to number
            input_val = formatNumber(input_val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // send updated string to input
        input.value = input_val;

        // put caret back in the right position
        var updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input.setSelectionRange(caret_pos, caret_pos);
    }
    return {
        formatNumber,
        checkAmountInput
    }
}