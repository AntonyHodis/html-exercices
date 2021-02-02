<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reponse</title>
</head>
<body>
    <p>Bienvenue <?php echo $_POST['prenom']; ?> <b> 
    <?php echo $_POST['nom']; ?></b>. <br>
    Nous avons bien noté que vous habitez <?php echo $_POST['adresse'],"à <b>",$_POST['ville'],"</b>(", $_POST['postalCode'],")."; ?></p> 
</body>
</html>