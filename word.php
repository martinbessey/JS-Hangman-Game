<?php

require_once('dbconnect');

//Récupére les valeurs passées en JSON
$jsdon = file_get_contents('php://input');
//Décoder les valeurs pour PHP et récupérer un objet
$data = json_decode($json);

$theme = ($data->$theme);
$difficultyMot =$data->difficultyMot;

//requête préparée

$req = $dbh->prepare('SELECT w.word FROM a.answers LEFT JOIN theme t ON m.ID_theme = t.id
LEFT JOIN difficulte d ON m.in_difficulty = d.id WHERE t.name = :theme AND d.name = difiiculty'); 

$req->bindParam('difficulty', $difficultyMot);
$req->bindParam('theme', $theme);

$req->execute();
$result = $req->fetchAll(PD::FETCH_ASSOC);

$data = $result[0];
echo $data;

$data = $results['nom'];
echo $data;
?>
