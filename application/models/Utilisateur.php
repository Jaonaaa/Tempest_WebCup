<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Student
 *
 * @author rango
 */
class Utilisateur extends CI_Model {
    
    public function insert_user($name, $fname, $mdp, $email, $dtn, $sexe, $idpays, $idstatus, $numero){
        
        $horoscope = $this->get_horoscope($dtn); 
        $age = $this->get_tranche_age($dtn);
        $query = sprintf("INSERT INTO utilisateur(nom, prenom, email, mdp, dtn, sexe, id_pays, id_horoscope, id_status, id_tranche_age, numero) VALUES('%s', '%s', '%s', '%s', '%s', %u, %u, %u, %u, 1, %u)", $name, $fname, $email, $mdp, $dtn, $sexe, $idpays, $horoscope, $idstatus, $numero);
        $req = $this->db->query($query);
        if($req){
            return '0';
        }else{
            return '1';
        }
    }

    function get_horoscope($birthday) {
        // Extract the month and day from the birthday string
        $month = intval(substr($birthday, 5, 2));
        $day = intval(substr($birthday, 8, 2));
        
        // Determine the horoscope based on the month and day
        switch ($month) {
            case 1: // January
                if ($day <= 19) {
                    return 10;;
                } else {
                    return 11;
                }
            case 2: // February
                if ($day <= 18) {
                    return 11;
                } else {
                    return 12;
                }
            case 3: // March
                if ($day <= 20) {
                    return 12;
                } else {
                    return 1;
                }
            case 4: // April
                if ($day <= 19) {
                    return 1;
                } else {
                    return 2;
                }
            case 5: // May
                if ($day <= 20) {
                    return 2;
                } else {
                    return 3;
                }
            case 6: // June
                if ($day <= 20) {
                    return 3;
                } else {
                    return 4;
                }
            case 7: // July
                if ($day <= 22) {
                    return 4;
                } else {
                    return 5;
                }
            case 8: // August
                if ($day <= 22) {
                    return 5;
                } else {
                    return 6;
                }
            case 9: // September
                if ($day <= 22) {
                    return 6;
                } else {
                    return 7;
                }
            case 10: // October
                if ($day <= 22) {
                    return 7;
                } else {
                    return 8;
                }
            case 11: // November
                if ($day <= 21) {
                    return 8;
                } else {
                    return 9;
                }
            case 12: // December
                if ($day <= 21) {
                    return 9;
                } else {
                    return 10;
                }
            default:
                return null; // Invalid month
        }
    }


    function get_tranche_age($birthday){
        $splited = explode(",", $birthday);

        // Récupère l'année de naissance
        $annee_naissance = $splited[0];

        // Récupère l'année actuelle
        $annee_actuelle = date('Y');

        // Calcule l'âge de la personne
        $age = $annee_actuelle - $annee_naissance;
        $sql = "SELECT id_tranche_age FROM tranche_age WHERE min_age <= $age AND max_age >= $age";
        $result = $this->db->query($sql);

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['id_tranche_age'];
        }
        return null;
    }

    // Checking the user
    public function checkuser($email, $pwd){
        // REQUETEE SQL
        $query = sprintf("SELECT * FROM v_utilisateur_details where email = '%s' AND mdp = '%s'", $email, $pwd); 
        $req = $this->db->query($query);
        $result = $req->row_array();
        return $result;
    }
}
