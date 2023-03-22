<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  $email = $data['email'];

  $file = fopen('saved-email.txt', 'a');
  fwrite($file, $email . "\n");
  fclose($file);

  http_response_code(200);
} else {
  http_response_code(405);
}
