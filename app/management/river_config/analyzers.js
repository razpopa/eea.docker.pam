// Analyzers to be used for different object properties
var analyzers = {
    "none" : {
      "type" : "keyword"
    },
    "coma" : {
      "type" : "pattern",
      "lowercase" : false,
      "pattern" : ", "
    },
    "semicolon" : {
      "type" : "pattern",
      "lowercase" : false,
      "pattern" : "; "
    }
};

// Proprety mappings for pamdata
// Describe how properties get indexed into ElasticSearch
var pamdataMappings = {
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#Country" : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#PAMID"  : {
        "type" : "string",
        "analyzer" : "none"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#Type_of_instrument" : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#Affected_GHG" : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#Targeted_sectors" : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#Projection_scenario_in_which_the_PAM_is_included" : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#Link_to_EU_Emissions_Trading_Scheme_ETS" : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#Type_of_implementing_entities" : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#Related_EU_policies" : {
        "type" : "string",
        "analyzer" : "semicolon"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#2015_EU_ETS_kt_CO2": {
        "type": "double"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#2020_total_kt_CO2": {
        "type": "double"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#2015_total_kt_CO2_equivalent_per_year": {
        "type": "double"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#2020_EU_ETS_kt_CO2": {
        "type": "double"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#2015_non_ETS_kt_CO2": {
        "type": "double"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#2025_total_kt_CO2": {
        "type": "double"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#2030_total_kt_CO2": {
        "type": "double"
    },
    "http://semantic.eea.europa.eu/project/pam/pam2014.csv#2020_non_ETS_kt_CO2": {
        "type": "double"
    }
};

var mappings = {
    'settings': {
        'analysis': {
            'analyzer': analyzers
        }
    },
    'mappings': {
        'resources': {
            'properties': pamdataMappings
        }
    }
};

module.exports = { 'mappings': mappings };
