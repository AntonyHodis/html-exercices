<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reponse</title>
</head>

<body>
    <p>Consultation de :</p>
    <li>
        
        <ol><a href="./etatCivil.php?prenom=<?php echo $_POST['prenom'],'&amp;nom=',$_POST['nom'];?> ">votre état civil</a></ol>
        <ol><a href="./adresse.php?adresse=<?php echo $_POST['adresse'],'&amp;postalCode=',$_POST['postalCode'],'&amp;ville=',$_POST['ville'];?>">votre adresse</a></ol></ol>
    </li>
</body>

</html>