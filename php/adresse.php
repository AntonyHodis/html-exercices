<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reponse</title>
</head>
<body>
    <p>Vous habitez : <br><?php echo $_GET['adresse'],"<br>",$_GET['postalCode']," ", $_GET['ville'];?></p>
</body>
</html>