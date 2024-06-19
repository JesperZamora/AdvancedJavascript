/**
 * With every new invocation of the outer function a temporary memory is established and we have new counter variable initialized.
 *
 * Hence every outer function call after incrementing will result in 1.
 */

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}

outer(); // Output: 1
outer(); // Output: 1

